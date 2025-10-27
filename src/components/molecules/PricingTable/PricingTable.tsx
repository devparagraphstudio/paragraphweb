import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui';
import {
    Home,
    Telescope,
    BarChart3,
    Monitor,
    Check,
} from 'lucide-react';

interface PricingFeature {
    title: string;
    items: string[];
}

interface PricingPackage {
    name: string;
    icon: React.ReactNode;
    content: PricingFeature;
    salesSupport: PricingFeature;
    marketingDigital: PricingFeature;
    timeline: string;
    price: string;
    isPopular?: boolean;
    isCustom?: boolean;
}

const PricingTable: React.FC = () => {
    const packages: PricingPackage[] = [
        {
            name: "Essentials",
            icon: <Home className="w-8 h-8" />,
            content: {
                title: "Content",
                items: [
                    "Designed 2D sales plans",
                    "Standard 3D renderings*"
                ]
            },
            salesSupport: {
                title: "Sales support",
                items: [
                    "Advertising panel/banner",
                    "Leaflet"
                ]
            },
            marketingDigital: {
                title: "Marketing digital",
                items: [
                    "Description for real estate portals"
                ]
            },
            timeline: "1 week",
            price: "CHF 0.-"
        },
        {
            name: "Visibility",
            icon: <Telescope className="w-8 h-8" />,
            content: {
                title: "Content",
                items: [
                    "Designed 2D sales plans",
                    "Standard 3D renderings*"
                ]
            },
            salesSupport: {
                title: "Sales support",
                items: [
                    "Advertising panel/banner",
                    "Brochure",
                    "Animation stills video"
                ]
            },
            marketingDigital: {
                title: "Marketing digital",
                items: [
                    "Description for real estate portals",
                    "Ready-to-use Instagram posts"
                ]
            },
            timeline: "3-4 weeks",
            price: "CHF 0.-"
        },
        {
            name: "Professional",
            icon: <BarChart3 className="w-8 h-8" />,
            content: {
                title: "Content",
                items: [
                    "Furnished 3D sales plans",
                    "Photo-realistic 3D renderings",
                    "Video-realistic 3D footage",
                    "Project branding"
                ]
            },
            salesSupport: {
                title: "Sales support",
                items: [
                    "Advertising panel/banner",
                    "Full-length brochure",
                    "Cinematic movie",
                    "Static website"
                ]
            },
            marketingDigital: {
                title: "Marketing digital",
                items: [
                    "Description for real estate portals",
                    "5 Cross-platform posts",
                    "Advertising campaign launch"
                ]
            },
            timeline: "10-12 weeks",
            price: "CHF 0.-"
        },
        {
            name: "Immersive",
            icon: <Monitor className="w-8 h-8" />,
            content: {
                title: "Content",
                items: [
                    "3D furnished sales plans",
                    "Photo-realistic 3D renderings",
                    "Video-realistic 3D footage",
                    "Project branding",
                    "Interactive & Immersive 3D"
                ]
            },
            salesSupport: {
                title: "Sales support",
                items: [
                    "Advertising panel/banner",
                    "Magazine",
                    "Cinematic movie",
                    "Interactive website"
                ]
            },
            marketingDigital: {
                title: "Marketing digital",
                items: [
                    "Description for real estate portals",
                    "Cross-platform posts + vertical teasers",
                    "Managed advertising campaign"
                ]
            },
            timeline: "",
            price: "on demand",
            isCustom: true
        }
    ];

    const FeatureSection: React.FC<{ feature: PricingFeature }> = ({ feature }) => (
        <div className="h-[150px] mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">{feature.title}</h4>
            <ul className="space-y-2">
                {feature.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="w-full py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-medium tracking-wide mb-4">Our Services & Pricing</h2>
                <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
                    Choose the perfect package for your real estate marketing needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((pkg, index) => (
                    <Card
                        key={index}
                        className={`bg-transparent border border-black rounded-none shadow-none relative h-[700px] transition-all duration-300 hover:shadow-lg p-6  ${pkg.isPopular ? 'ring-2 ring-blue-500' : ''
                            }`}
                    >
                        {pkg.isPopular && (
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                                Most Popular
                            </Badge>
                        )}

                        <CardHeader className="text-center p-0">
                            <div className="flex justify-between mb-3">
                                <CardTitle className="text-2xl font-normal">{pkg.name}</CardTitle>
                                <div >
                                    {pkg.icon}
                                </div>
                            </div>

                        </CardHeader>

                        <CardContent className="p-0">
                            <FeatureSection feature={pkg.content} />
                            <FeatureSection feature={pkg.salesSupport} />
                            <FeatureSection feature={pkg.marketingDigital} />

                            <div className="flex justify-between pt-4 space-y-3">
                                <div className="flex items-center gap-2 text-base font-medium">
                                    <span>{pkg.timeline}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className={`text-[22px]`}>
                                        {pkg.price}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-left mt-4">
                <p className="text-sm text-gray-500">
                    * Quantities and time adjusted according to projects
                </p>
            </div>
        </div>
    );
};

export { PricingTable }; 