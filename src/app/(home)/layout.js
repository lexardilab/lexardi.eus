import MetricoolScript from "../../components/MetricoolScript";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeLayout({ children }) {
  return (
    <>
      <MetricoolScript />
      {children}
    </>
  );
}