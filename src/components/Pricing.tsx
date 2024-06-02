import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free Forever",
    popular: 0,
    price: 0,
    description:
      "",
    buttonText: "Get Started",
    benefitList: [
      "1 Strategy",
      "3 Buckets / Strategy",
      "5 Collection",
      "1 ODS ( On Demand Sync ) / Day",
      "Sync upto 20 Products",
      "Auto Sync"
    ],
  },
  {
    title: "Starter",
    popular: 1,
    price: 9.99,
    description:
      "or $99.99/year and save 17%",
    buttonText: "Get Started",
    benefitList: [
      "5 Strategy",
      "5 Buckets / Strategy",
      "10 Collection",
      "3 ODS ( On Demand Sync ) / Day",
      "Sync upto 50 Products",
      "Auto Sync"
    ],
  },
  {
    title: "Launch",
    popular: 0,
    price: 29.99,
    description:
      "or $299.99/year and save 17%",
    buttonText: "Get Started",
    benefitList: [
      "15 Strategy",
      "10 Buckets / Strategy",
      "30 Collection",
      "12 ODS ( On Demand Sync ) / Day",
      "Sync upto 250 Products",
      "Auto Sync",
      "Analytics"
    ],
  },
  {
    title: "Launch",
    popular: 0,
    price: 99.99,
    description:
      "or $959.90/year and save 20%",
    buttonText: "Get Started",
    benefitList: [
      "50 Strategy",
      "30 Buckets / Strategy",
      "100 Collection",
      "40 ODS ( On Demand Sync ) / Day",
      "Sync upto 450 Products",
      "Auto Sync",
      "Analytics"
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis. */}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription className="min-h-64">{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
