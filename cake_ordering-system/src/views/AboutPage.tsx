import React from 'react';
import Button from "../components/card/button";


class MenuPage extends React.Component<any, any>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
        <div className="min-h-screen flex flex-col  lg:px-32 px-5  bg-white">
            <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8 font-bold text-black italic">About Us</h1>

            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="w-full lg:w-2/4">
                    <img className="rounded-lg" src="/src/assets/about.png" alt="img"/>
                </div>
                <div className="w-full lg:w-2/4 p-4 space-y-3  items-center justify-center">
                    <h2 className="font-semibold text-3xl items-center justify-center font-bold text-black italic">
                        What Makes Our Coffee Cake Special?
                    </h2>
                    <p>
                        Coffee cake and regular cake are made with the same ingredients like flour, sugar, eggs,
                        and butter and a leavening agent like baking powder.The difference is that instead of frosting on top, coffee cakes have crumble or streusel.
                        Just like a cake, it can also have glaze or icing.

                    </p>

                    <div className={'text-center mt-5 text-white'}>
                        <button className={'main-btn '}>Go to menu</button>
                    </div>

                </div>
            </div>
        </div>

        );
    }

}

export default MenuPage;
