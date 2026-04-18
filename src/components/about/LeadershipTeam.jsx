import Image from "next/image";

export default function LeadershipTeam() {
  const leaders = [
    { name: "Ahmed Javed Jamal", role: "Founder & Business Lead", img: "AB6AXuCQMXVbmrCuo74EPt3H3RbF5ad04cZ6gd3By0D2pGfN4-xk2bGo8ABFJGaiR-m9XMlrthgNsioPqpxMmhTKINqvvH8XeV9HrLarBZi1F-Rd6TZliSECV9CdykLLxiTZHq6kZeXMh4nqDetsWa0y1Vrck42S2TQGrj24JKflUrFnoaLzzN-Rw3d3BE4IFuiWvT_t1u8W5Xl8VK2PW5juJNoD4wHRdGYS4jm5nbNTgZJJpyZZXwD-nmK_1sLsNNY3PGk7vXiP8PzrlHQ" },
    { name: "Syed Samsul Amin, PhD", role: "Advisor", img: "AB6AXuCkEyF29y3GIo51mCrbEWj639XsLkj_lKa50ETLxIKT27n-Xk0bDuSOcLL45_oNuMYkddTpg44CXznN5QGRpEK9HGpEOF4SifZofjJTEto4HsS7bLyCuG6hZaNXasTFGqsNXNbfiKbMYeZQcIGtKV1VNzwI2mK_x2ENb_5Z4GF--Ru7poBGTlHMf-2sr6U9gY3exACTA8dZ3hExHvS4aakosqhLHc3W71YuN69knYANUpnUaCTWAabpkrmTvzvYWNkMmuKqbJg6rUI" },
    { name: "Sayeed Hyder (PhD)", role: "Advisor (Technical)", img: "AB6AXuAqXelMGbBwgD0YbFg11xKpA9VNxC7up4NXRCuy-HbakoZiL22u_IknGDfEG_mJNJzEkAADzqMNNnP7Guao3NKj-ryuiAav8kjPVCwOP-ukgXv-fLs9gC56A_WTNAJF1tMfuusXT_JFX78deKBugQCZEJomqrn8TN02xA0RCQ-bT8NIGyxpln4lGFHveGv9nlfURyipkX7KPnQ6SjkVa-m4UxuAKtVyfjszsUpYSxrw3e3OJK3J3K26gzzHkbp9Zq-0fx86jELdTIY" },
    { name: "Dr. Khairun Naher", role: "Chief Operating Officer", img: "AB6AXuBphO0hRNx455dOsTXSENfNOYFTEOoHb7LqlDG5j27_CmI4tm4KwhCdOYSYtKHWln0ZDpbxnT-xSm3UcCOLDrIY_RGzzxLijwwz-gNrwUrZBMfZJhVKw2e6ykx9fiaAtt6Y8w0OkE227zo73b8BoQkUdX9GVqe7iIcXK87n2tR6xAnJC29YjPwQMdb2CP9Z2EPq_ek3sdgasbOVagNjoeoTGLON2VxYvXmgBJUt6Ym3WENYDSc_yqNX2SrUAHYiyzRPLousX2B1f0U" },
    { name: "Dr. Asif Zaman", role: "Head of Training", img: "AB6AXuC0qeeOnVZxIKIKw0lYekJnxEXYctWD3Vz78MGeqmiDApK49owVgQlt-NJmZlD8DrTBWn7U2_yLH7yk7QlW1tkB9y6aRl1Gl5y2LrEuMEgtu02bsLJq9yF7CTFhvreJxet5dkZprDGnzagNvXTtsTtQd2sDtSzcY39ZtcO_BKy-gstszUxUqXQ97ocOCCs_WeaIwl4ysD-2jT6bM2mmHtIPk45rUBfTGj_Dj_cD6YCCb4-fOMm0XlCghyt_tIt0Lk5an_v4ZoZ4X_Y" },
    { name: "Dr. Israt Imrose", role: "Advisor", img: "AB6AXuCpOS_BvTJmJDLi7ozX1lT2MCiZKqnZDQF14GF9NZtBZIrwuoyMXgnjHCKFfM07IkAEeQHdQGsZgO5H3eSkCX_K2IbK5Q1D7QQL-6JUx8uQI8kZa2rpcygpBGcM5UpSLHMBH_hugrQs9bvWRkrmXAdqrmI9laOmtsvKW_4WD-1DPzC9nXJSLMU3bZk2Yrkj7g8qJe2N_uxLdfDTHT50f-JOa3_dltDgWH14rwE84gTw5yg0pz7D6sxEICWfY2ITeYNJQ882crjxQJE" },
    { name: "Dr. Nadia Shakin", role: "Full-time Medical Expert", img: "AB6AXuC8b7eBaWJUyWbf6cDPFeGmLi2xKl_icioFGGSheJPaGySVSgZvoR7cr3-GrzWMAVE1JkoqUAmclXXsH6VuqlbaeoJnqlB6dvonVbGtGSRCtPZ3H_KxpEclVKKJAyue6OAn7tt69imKhTqeYHaEH766MtE1zFvcgeXcluoHoOh1nL36KR58FJNB1I4ckopRdxKJBvkWcc9pyY4IcsiIUcHqkgm4PSnnlfzX0WnUp0JauL6BvgrnCh2DcIZhOcW97I_eeF4CTrCEK_A" },
    { name: "Atiqur Rahman", role: "Tech Lead", img: "AB6AXuDiCmGnN5R7UweRjNpq_uN3IZv4uMWEb2naDg7qra1c_3JjvLeOKFXY1_pZYE5-QLstNBE5bg8yP93teMHAtchJG44SimGwlWePhFM6gvhEdnSd_64fcByW-4_VcGyVXDGZ6VNRtQFgKaUeNdvjBS7SWOESjZ-uFdiSNQRhAST0Ka8-ZDS-Du8oS_f_ZuIh0Iy7mBdtEFDrv0yb3MYQJIkRCsDZH3DPX1nv1xNhoLd1_T0HYtjuuQd5jzTUHAXiAuvQOXgxClxau_I" },
  ];

  return (
    <section className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Our Leadership Team</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {leaders.map((leader, i) => (
          <div key={i} className="service-card-glass p-6 rounded-xl flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 mb-4 group-hover:scale-105 transition-transform">
              <Image alt={leader.name} className="object-cover" src={`https://lh3.googleusercontent.com/aida-public/${leader.img}`} fill sizes="96px"/>
            </div>
            <h4 className="font-bold text-primary">{leader.name}</h4>
            <p className="text-xs text-base-content/60 font-medium">{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
