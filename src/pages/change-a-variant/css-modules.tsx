import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const CssModulesTest = dynamic(() => import('../../bench/change-a-variant/css-modules'), { ssr: false });

  return <CssModulesTest />;
};

export default CreateAndMountComponent;
