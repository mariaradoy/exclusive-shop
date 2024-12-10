import { Wrapper } from "./wrapper";
import { Categories } from "./sidebar-categories";
import { useState } from "react";
import DropDown from "./../assets/icons/dropdown.png"
import AppleLogo from "./../assets/icons/apple-gray-logo.png";
import ArrowRight from "./../assets/icons/arrow-right.png";
import iPnonePhoto from "./../assets/images/phone.png";



export const CategoriesSidebar = () => {

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleMouseEnter = (title: string) => {
        setActiveDropdown(title);
    }

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    }


    return (
        <Wrapper>
            <div className="flex h-[384px] pt-10 justify-between">
                <div className="border-r pr-4">
                    <ul className="space-y-4">
                        {Categories.map((category) => (
                            <li
                                key={category.id}
                                className="relative group"
                                onMouseEnter={() => category.subCategories && handleMouseEnter(category.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Основное меню */}
                                <a href={category.url} className="flex justify-between items-center"
                                >
                                    <span className="pr-[51px]">{category.title}</span>
                                    {category.subCategories && (<img src={DropDown} alt="dropdown" />
                                    )}
                                </a>

                                {/* Подменю */}
                                {category.subCategories && activeDropdown === category.title && (
                                    <ul className="absolute left-full top-0 w-48 bg-white shadow-lg border p-2 space-y-1 z-10">
                                        {category.subCategories.map((subCategory) => (
                                            <li key={subCategory.title}>
                                                <a
                                                    href={subCategory.url}
                                                    className="block px-2 py-1 rounded"
                                                >
                                                    {subCategory.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" bg-black w-[892px] h-[344px] text-white flex ">
                    <div className="columns-1 pl-16 pt-[58px]">
                        <div className="flex items-center gap-6 pb-5">
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