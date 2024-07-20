
import BaseLayout from '@/components/BaseLayout'
import UserProfile from './UserProfile'
import prisma from '@/db/prisma';
import { notFound } from 'next/navigation';
import { getUserProfileAction } from '@/app/update-profile/actions';
import Posts from './Posts';



async function HomeScreen() {

  const admin = await prisma.user.findUnique({ where: { email: process.env.ADMIN_EMAIL } });
	const user = await getUserProfileAction();

	if (!user) return notFound();

 
  return (
    <BaseLayout>
      <UserProfile />
      <Posts admin={admin!} isSubscribed={user?.isSubscribed} />



    </BaseLayout>
  )
}

export default HomeScreen