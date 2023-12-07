import Link from "next/link";

const UserTabs = ({ isAdmin }) => {
  return (
    <div className={'flex justify-center mx-auto gap-2 tabs'}>
      <Link className={'active'} href={'/profile'}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link href={'/categories'}>Categories</Link>
          <Link href={'/menu-items'}>Menu Items</Link>
          <Link href={'/users'}>Users</Link>
        </>
      )}
    </div>
  );
};

export default UserTabs;
