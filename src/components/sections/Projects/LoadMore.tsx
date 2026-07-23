interface Props {

    visible:number;

    total:number;

    onLoadMore:()=>void;

    onShowLess:()=>void;

}

const LoadMore = ({

    visible,

    total,

    onLoadMore,

    onShowLess

}:Props)=>{

    if(total<=6) return null;

    return(

        <div className="mt-20 flex justify-center">

            {

                visible<total?

                (

                    <button

                        onClick={onLoadMore}

                        className="
                            rounded-xl
                            bg-blue-600
                            px-8
                            py-4
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-500
                        "

                    >

                        Load More

                    </button>

                )

                :

                (

                    <button

                        onClick={onShowLess}

                        className="
                            rounded-xl
                            border
                            border-blue-500
                            px-8
                            py-4
                            font-semibold
                            text-blue-400
                            transition
                            hover:bg-blue-500
                            hover:text-white
                        "

                    >

                        Show Less

                    </button>

                )

            }

        </div>

    );

};

export default LoadMore;