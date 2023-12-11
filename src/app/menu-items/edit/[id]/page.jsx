'use client';

import { useEffect, useState } from 'react';
import { useProfile } from '@/components/UseProfile';
import UserTabs from '@/components/layout/UserTabs';
import Link from 'next/link';
import Right from '@/components/icons/Right';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { redirect, useParams } from 'next/navigation';
import Left from '@/components/icons/Left';
import EditableImage from '@/components/layout/EditableImage';
import MenuItemForm from '@/components/layout/MenuItemForm';
import DeleteButton from '@/components/DeleteButton';

const EditMenuItemPage = () => {
  const { id } = useParams();

  const [menuItem, setMenuItem] = useState(null);

  const { data, loading } = useProfile();

  const [redirectToItems, setRedirectToItems] = useState(false);

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(items => {
        const item = items.find(i => i._id === id);

        setMenuItem(item);
      });
    });
  }, []);

  const handleFormSubmit = async (e, data) => {
    e.preventDefault();

    data = { ...data, _id: id };

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/menu-items', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving this tasty item',
      success: 'Saved',
      error: 'Error',
    });

    setRedirectToItems(true);
  };

  const handleDeleteClick = async () => {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/menu-items?_id=' + id, {
        method: 'DELETE',
      });

      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Deleted',
      error: 'Error delete',
    });

    setRedirectToItems(true);
  };

  if (redirectToItems) {
    return redirect('/menu-items');
  }

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }

  return (
    <section className={'mt-8'}>
      <UserTabs isAdmin={true} />

      <div className={'max-w-2xl mx-auto mt-8'}>
        <Link href={'/menu-items'} className={'button'}>
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>

      <MenuItemForm onSubmit={handleFormSubmit} menuItem={menuItem} />

      <div className={'max-w-md mx-auto mt-2'}>
        <div className={'max-w-xs ml-auto pl-4'}>
          <DeleteButton label={'Delete this menu item'} onDelete={handleDeleteClick} />
        </div>
      </div>
    </section>
  );
};

export default EditMenuItemPage;
