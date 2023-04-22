import Login from "../components/login/login";
import UserProfile from "../components/user-profile/user-profile";

import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export interface UserProfileProps {
  given_name?: string,
  family_name?: string,
  nickname?: string,
  name?: string,
  picture?: string,
  locale?: string,
  updated_at?: string,
  email?: string,
  email_verified?: boolean,
  sub?: string,
  sid?: string
}

export function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return;
    <div className='flex items-center justify-center min-h-screen'>
      <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
      <p className="ml-2">checking...</p>
    </div>


  if (error) return <div>{error.message}</div>;

  if (user) {
    const userInfo: UserProfileProps = user;

    return (
      <UserProfile user={userInfo} />
    );
  }

  return <Login />;
}

export const getServerSideProps = withPageAuthRequired();

export default Index;
