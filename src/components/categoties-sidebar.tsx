import { Wrapper } from "./wrapper";
import AppleLogo from "./../assets/icons/apple-gray-logo.png";
import ArrowRight from "./../assets/icons/arrow-right.png";
import iPnonePhoto from "./../assets/images/phone.png";

const categories = [
    { id: 1, name: "Womans's Fashion", url: "#" },
    { id: 2, name: "Men's Fashion", url: "#" },
    { id: 3, name: "Electronics", url: "#" },
    { id: 4, name: "Home & Lifestyle", url: "#" },
    { id: 5, name: "Medicine", url: "#" },
    { id: 6, name: "Sports & Outdoors", url: "#" },
    { id: 7, name: "Baby's & Toys", url: "#" },
    { id: 8, name: "Groceries & Pets", url: "#" },
    { id: 9, name: "Health & Beuty", url: "#" }]
    ;

export const Categories_sidebar = () => {
    return (
        <Wrapper>
            <div className='flex pt-10 justify-between'>

                <div className="w-[217px] h-[344px] border-r">
                    <ul className="space-y-4">
                        {
                            categories.map((categorie) => (
                                <li key={categorie.id}>
                                    <a href={categorie.url}>
                                        {categorie.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className=" bg-black w-[892px] h-[344px] text-white flex ">
                    <div className="columns-1 pl-16 pt-[58px]">
                        <div className="flex items-center justify-cente gap-6 pb-5">
                            <img src={AppleLogo} alt="Apple Gray Logo" />
                            <span>iPhone 14 Series</span>
                        </div>
                        <div className="w-[294px] h-[120px]">
                            <span className="font-semibold text-5xl leading-[56px]">Up to 10% off Voucher</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="border-b border-b-transparent hover:border-b-white transition-all">Shop Now</span>
                            <img src={ArrowRight} alt="arrow" />
                        </div>
                    </div>

                    <div className="w-[496px] h-[362px] pt-4">
                        <img src={iPnonePhoto} alt="iPhone Photo" />
                    </div>
                </div>


            </div>

        </Wrapper>

    );
}