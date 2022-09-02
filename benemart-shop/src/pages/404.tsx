import Layout from '@/components/layout/layout';
import ErrorInformation from '@/components/404/error-information';

export default function ErrorPage() {
  return (
    <>
      <ErrorInformation />
    </>
  );
}

ErrorPage.Layout = Layout;