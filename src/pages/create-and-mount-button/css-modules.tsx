import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const CssModulesTest = dynamic(() => import('../../bench/create-and-mount-button/css-modules'), { ssr: false });

  return <CssModulesTest />;
};

export default CreateAndMountComponent;
