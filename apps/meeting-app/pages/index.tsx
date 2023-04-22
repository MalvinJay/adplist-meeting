import React, { useEffect } from 'react';
import DyteClient from '@dytesdk/web-core';
import Link from 'next/link';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { Button, Loader } from '@alpha/ui';
import { LogOut } from 'react-feather';

const token = process.env.NEXT_PUBLIC_AUTH_TOKEN || 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImExYjAxZGVkLTk2Y2EtNDJjOC05ZTkwLTRiMjY4MzY2NmQ5YiIsIm1lZXRpbmdJZCI6ImJiYjJkMmVlLWQ4OTctNDE3My05ZWNiLTI0MzQ1OTA5MmQ3YSIsInBhcnRpY2lwYW50SWQiOiJhYWEyNjA2YS1lODdkLTQxODQtOGIzMi01NGQxMzBjNmYyZDEiLCJwcmVzZXRJZCI6Ijg4MmZhMTgyLWZiNWEtNDQwYy05ZmQwLWEzZWExODA2NzZlNSIsImlhdCI6MTY4MjExNjU1MSwiZXhwIjoxNjkwNzU2NTUxfQ.dvIB19jnaSEBrAeCGwJ2EhPbzcNrRfnngOhOhhnVOi5XNCuAetwpdbJPq9cIeHzbGXmaECfw_dS5pifgqIo3IU4G32hCDhu-XkDsp4jOFx97fNnWcDu7mN-WYhn0WSvGrTRcl1BIo33oCPidkt_ZaLvUIKs5WcyoHCymRKg1qpyebFwce0fOWHuyWkGARn6uURqF15DncQ6UofgFIU07s8ZyE87porM-dVOrIosJoWFJ4xe9SlNgbFaTlq7AgT9_6KtpyKU5-ddhcAZ1NgAZJJY-uuOkFyDdQAQochXH_jlvxUdJkVtv_wNwF3-QvEPL4eb1HMo_7Y20DV97Uf2O-A'

function Index() {
  const { user, error, isLoading } = useUser();
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      authToken: token,
      defaults: {
        audio: false,
        video: false
      }
    });
  }, []);

  if (isLoading) return;
    <div className='flex items-center justify-center min-h-screen'>
      <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
      <p className="ml-2">checking...</p>
    </div>

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className='relative'>
        <div className="absolute right-4 top-10 z-10">
          <Link href="/api/auth/logout">
            <Button className='btn-primary !bg-red-400 w-24 py-1 rounded flex items-center justify-center'>
              Logout <LogOut className='pl-2' />
            </Button>
          </Link>
        </div>

        <DyteProvider
          value={meeting}
          fallback={
            <div className='h-screen w-screen bg-black'>
              <Loader />
            </div>
          }
        >
          <div className='h-screen'>
            <DyteMeeting
              mode="fill"
              meeting={meeting as DyteClient}
            />
          </div>
        </DyteProvider>
      </div>
    );
  }

}

export const getServerSideProps = withPageAuthRequired();

export default Index;