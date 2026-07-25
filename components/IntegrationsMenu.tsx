import {
  Database,
  HardDrive,
  Cloud,
  Server,
  Boxes,
  Target,
  Globe,
  Monitor,
  GitBranch,
  Sigma,
  Eye,
  Workflow,
} from "lucide-react";

const IntegrationsMenu = () => {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 text-gray-800">
      <div className="w-[1280px] rounded-2xl border border-gray-200 bg-white px-10 py-8 shadow-xl">
        <div className="grid grid-cols-4 gap-10">

          {/* ALL INTEGRATIONS */}
          <div className="border-r border-gray-200 pr-10">
            <p className="mb-8 text-xs uppercase tracking-widest text-gray-500">
              All Integrations
            </p>

            <h3 className="text-[18px] font-semibold text-gray-900">
              Integration Catalog
            </h3>

            <p className="mt-4 text-[16px] leading-7 text-gray-600">
              Hightouch integrates with 300+ tools spanning Advertising,
              Marketing Automation, CRMs, Customer Success, and more.
            </p>

            <button className="mt-14 flex items-center gap-4 text-[18px] font-semibold">
              See all 300+ integrations

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                →
              </span>
            </button>
          </div>

          {/* POPULAR SOURCES */}
          <div className="border-r border-gray-200 pr-10">
            <p className="mb-8 text-xs uppercase tracking-widest text-gray-500">
              Popular Sources
            </p>

            <div className="space-y-8 text-[18px]">

              <div className="flex items-center gap-4">
                <Database className="h-7 w-7 text-sky-500" />
                <span>Snowflake</span>
              </div>

              <div className="flex items-center gap-4">
                <HardDrive className="h-7 w-7 text-red-500" />
                <span>Databricks</span>
              </div>

              <div className="flex items-center gap-4">
                <Cloud className="h-7 w-7 text-blue-500" />
                <span>Google BigQuery</span>
              </div>

              <div className="flex items-center gap-4">
                <Server className="h-7 w-7 text-orange-500" />
                <span>AWS Redshift</span>
              </div>

              <div className="flex items-center gap-4">
                <Boxes className="h-7 w-7 text-cyan-500" />
                <span>Azure Synapse</span>
              </div>

            </div>

            <button className="mt-12 flex items-center gap-4 text-[18px] font-semibold">
              See all sources

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                →
              </span>
            </button>
          </div>

          {/* POPULAR DESTINATIONS */}
          <div className="border-r border-gray-200 pr-10">
            <p className="mb-8 text-xs uppercase tracking-widest text-gray-500">
              Popular Destinations
            </p>

            <div className="space-y-8 text-[18px]">

              <div className="flex items-center gap-4">
                <Cloud className="h-7 w-7 text-blue-600" />
                <span>Salesforce</span>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="h-7 w-7 text-orange-500" />
                <span>HubSpot</span>
              </div>

              <div className="flex items-center gap-4">
                <Target className="h-7 w-7 text-green-600" />
                <span>Google Ads</span>
              </div>

              <div className="flex items-center gap-4">
                <Monitor className="h-7 w-7 text-blue-500" />
                <span>Facebook Ads</span>
              </div>

              <div className="flex items-center gap-4">
                <Database className="h-7 w-7 text-purple-600" />
                <span>The Trade Desk</span>
              </div>

            </div>

            <button className="mt-12 flex items-center gap-4 text-[18px] font-semibold">
              See all destinations

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                →
              </span>
            </button>
          </div>

          {/* POPULAR EXTENSIONS */}
          <div>
            <p className="mb-8 text-xs uppercase tracking-widest text-gray-500">
              Popular Extensions
            </p>

            <div className="space-y-8 text-[18px]">

              <div className="flex items-center gap-4">
                <GitBranch className="h-7 w-7 text-orange-500" />
                <span>dbt</span>
              </div>

              <div className="flex items-center gap-4">
                <Sigma className="h-7 w-7 text-purple-600" />
                <span>Sigma</span>
              </div>

              <div className="flex items-center gap-4">
                <Eye className="h-7 w-7 text-blue-500" />
                <span>Looker</span>
              </div>

              <div className="flex items-center gap-4">
                <Workflow className="h-7 w-7 text-green-600" />
                <span>Fivetran</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IntegrationsMenu;