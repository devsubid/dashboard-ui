import Image from "next/image";
import LineChart from "./lineChart";
import Product from "./product";
import Schedule from "./schedule";

const analytics = [
  {
    icon: "/icon/revenues.svg",
    title: "Total Revenues",
    value: "$2,129,430",
    color: "#DDEFE0",
  },
  {
    icon: "/icon/transactions.svg",
    title: "Total Transactions",
    value: "1,520",
    color: "#F4ECDD",
  },
  {
    icon: "/icon/likes.svg",
    title: "Total Likes",
    value: "9,721",
    color: "#EFDADA",
  },
  {
    icon: "/icon/users.svg",
    title: "Total Users",
    value: "892",
    color: "#DEE0EF",
  },
];

const Analytics = () => {
  return (
    <div className="flex-1 p-8 pl-0 flex flex-col gap-10">
      <Header />
      <div className="cards flex gap-10">
        {analytics.map((analytic) => (
          <Card key={analytic.title} analytics={analytic} />
        ))}
      </div>
      <div className="line-chart">
        <LineChart />
      </div>
      <div className="insights flex gap-10">
        <Product />
        <Schedule />
      </div>
    </div>
  );
};

export default Analytics;

const Header = () => (
  <header className="flex justify-between items-center">
    <h2 className="font-montserrat text-2xl font-bold">Dashboard</h2>
    <div className="right flex items-center gap-6">
      <div className="input-box flex bg-white rounded-xl px-4 py-2">
        <input
          className="bg-transparent focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img className="w-4" src="/icon/search.svg" alt="" />
        }
      </div>
      <div className="notification cursor-pointer">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/icon/notification.svg" alt="" />
        }
      </div>
      <div className="profile cursor-pointer">
        <Image
          className="rounded-full w-10"
          src={"/img/profile.jpg"}
          width={50}
          height={50}
          alt=""
        />
      </div>
    </div>
  </header>
);

const Card = ({
  analytics: { icon, title, value, color },
}: {
  analytics: {
    icon: string;
    title: string;
    value: string;
    color: string;
  };
}) => (
  <div
    className={`card flex-1 rounded-xl p-8 min-w-fit flex flex-col`}
    style={{
      backgroundColor: color,
    }}
  >
    {
      // eslint-disable-next-line @next/next/no-img-element
      <img className="w-7 ml-auto" src={icon} alt="" />
    }
    <div className="font-lato mt-auto">{title}</div>
    <h4 className="font-openSans font-bold text-2xl">{value}</h4>
  </div>
);
