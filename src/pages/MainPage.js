import MainPageHeader from '../components/main/MainPageHeader';
import MainPageArticle from '../components/main/MainPageArticle';
import MainPageBanner from '../components/main/MainPageBanner';
import MainPageTabBar from '../components/main/MainPageTabBar';
import Layout from '../global/components/MyPageLayout';

export default function Mainpage() {
  return (
    <Layout>
      <MainPageHeader />
      <MainPageArticle />
      <MainPageBanner />
      <MainPageTabBar />
    </Layout>
  );
}
