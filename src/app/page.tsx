import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TopCategories from '@/components/TopCategories';
import PromoBanner from '@/components/PromoBanner';
import NewProducts from '@/components/NewProducts';
import ThreeBanners from '@/components/ThreeBanners';
import NewArrivals from '@/components/NewArrivals';
import TwoBanners from '@/components/TwoBanners';
import FeaturedProducts from '@/components/FeaturedProducts';
import ThreeBannersRow3 from '@/components/ThreeBannersRow3';
import DealsOfTheDay from '@/components/DealsOfTheDay';
import ValueProps from '@/components/ValueProps';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 selection:text-[#4c35de]">
      {/* Top Header */}
      <Header />

      {/* Main Hero Section */}
      <Hero />

      {/* Top Categories */}
      <TopCategories />

      {/* Health & Safety Promo Banner */}
      <PromoBanner />

      {/* New Products Section */}
      <NewProducts />

      {/* 3-Column Promo Banners (Row 1) */}
      <ThreeBanners />

      {/* New Arrivals & Machic Store Section */}
      <NewArrivals />

      {/* 2-Column Promo Banners (Row 2) */}
      <TwoBanners />

      {/* Featured Products & Smart Store Section */}
      <FeaturedProducts />

      {/* 3-Column Promo Banners (Row 3) */}
      <ThreeBannersRow3 />

      {/* Deals of the Day with Countdown & Spotlight Product */}
      <DealsOfTheDay />

      {/* Value Propositions & Trust Badges */}
      <ValueProps />

      {/* Newsletter Subscription */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}
