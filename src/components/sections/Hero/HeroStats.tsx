import Card from "../../ui/Card";
import { heroStats } from "../../../data/stats";

const HeroStats = () => {
    return (
        <div className="mt-12 grid gap-5 sm:grid-cols-3">

            {heroStats.map((stat) => {

                const Icon = stat.icon;

                return (
                    <Card
                        key={stat.title}
                        className="text-center transition-all duration-300 hover:-translate-y-2"
                    >
                        <Icon
                            size={32}
                            className="mx-auto mb-4 text-blue-400"
                        />

                        <h3 className="text-3xl font-black  dark:text-white">
                            {stat.number}
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            {stat.title}
                        </p>

                    </Card>
                );

            })}

        </div>
    );
};

export default HeroStats;