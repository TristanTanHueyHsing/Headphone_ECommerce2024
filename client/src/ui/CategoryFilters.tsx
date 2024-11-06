import React, { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";
import { RotatingLines } from "react-loader-spinner";
import { CategoryProps } from "../../type";
import { Link } from "react-router-dom";

const CategoryFilters = ({ id }: { id: string | undefined }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="hidden md:inline-flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <div>
        <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2">
          Select Categories
        </p>
        <div className="flex flex-col gap-y-2 min-w-40">
          {loading ? (
            <div className="flex items-center justify-center my-5">
              <RotatingLines
                visible={true}
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                width="50"
              />
            </div>
          ) : (
            categories?.map((item: CategoryProps) => (
              <Link
                to={`/category/${item?._base}`}
                key={item?._id}
                className={`text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
                  item?._base === id
                    ? "text-greenText decoration-greenText"
                    : "text-lightText"
                }`}
              >
                {item?.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;

//https://headmania.org/2024/03/06/sennheiser-momentum-true-wireless-4-earbuds-review/    https://pixlr.com/express/   https://hifigo.com/blogs/guide/frequency-response   https://audio46.com/collections/bluetooth-headphones?page=3   https://eliseaudio.com/   https://crinacle.com/graphs/

//https://audio46.com/collections/audiophile-earphones?pf_mlt_headphone_options=planar+magnetic    https://eliseaudio.com/collections/headphones   
// https://crinacle.com/page/3/?s=true+wireless
// https://www.e-earphone.jp/product/search/list/?pageno=4&category_id=14&search_type=0&orderby=1&on_sale_only_display=true
// https://www.e-earphone.jp/html/template/default/assets_time/01_tm2020/banner/202410/241023_final_a6000_600687.webp
// https://www.e-earphone.jp/products/detail/1676493/
// https://www.e-earphone.jp/products/detail/1672707/
// https://www.google.com/search?q=jvc+hafw10000+driiver&oq=jvc+hafw10000+driiver&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDg2NTlqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#fpr=r
// https://www.google.com/search?q=hangout+audio+squig&sca_esv=58681a8b88731783&ei=Z-gqZ6jNLaGPseMProm96AY&oq=hangout+audio+&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmhhbmdvdXQgYXVkaW8gKgIIAUgAUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQCYAgCgAgCYAwCSBwCgBwA&sclient=gws-wiz-serp
// https://www.head-fi.org/showcase/moondrop-stellaris.26075/reviews
// https://www.head-fi.org/threads/oriolus-szalayi-iem-discussion-thread.964150/page-2#post-17063060
// https://www.google.com/search?sca_esv=58681a8b88731783&q=audeze+euclid+frequency+response&udm=2&fbs=AEQNm0COtQ6qE5snXClm_cWqGTLX_jMP5V4l2v9LemFtanifXUj1LD6QCINf2Stcfc55fHi_K0iAiH4y_ML3L3eGQg5PEfGyozrH18UyDG1K7hKluirqLXn3W4xbubFf-JlW-rLHwHKtknQStyHUHurmuREA-EcGQvGc1tkuTPadS97hRIQtzGEDv3xnqbV6_U7TsoNyXI0QvhsymvxWjRji2eJpE7C0mg&sa=X&ved=2ahUKEwjCt8eN6saJAxWhT2wGHSnDBmgQtKgLegQIERAB&biw=1536&bih=776&dpr=1.25#vhid=DgCoJIJqfClZZM&vssid=mosaic
// https://crinacle.com/2021/03/26/audeze-euclid-review-improvement/
// https://www.google.com/search?q=letshuoer+s12+frequency+response&sca_esv=58681a8b88731783&ei=SuwqZ9DQEfSgseMP8LeiyQw&oq=letshouer+s12+fr&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGxldHNob3VlciBzMTIgZnIqAggAMgcQABiABBgNMggQABgIGA0YHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI6BdQoQdY6w1wAXgBkAEAmAFkoAH-AaoBAzIuMbgBA8gBAPgBAZgCBKACpQLCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICBxAAGIAEGArCAgYQABgNGB7CAgsQABiABBiGAxiKBZgDAIgGAZAGCZIHAzMuMaAHkhc&sclient=gws-wiz-serp#vhid=IyypUvTpBEx72M&vssid=_WuwqZ-jTHd-6seMPyeSeqQE_33
// https://hiendportable.com/letshuoer-s12-english-review/
// https://crinacle.com/guide/tws/#nt100
// https://crinacle.com/guide/tws/master-dynamic-mw07/#mw07
// https://crinacle.com/guide/tws/noble-falcon/#falcon
// https://crinacle.com/guide/tws/#tevi
// https://crinacle.com/guide/tws/#nt100
// https://crinacle.com/guide/tws/#wf1000xm3