import React from 'react'

const IntegrationsMenu = () => {
  return (
    <div>
      <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2">
  <div className="w-[1280px] rounded-2xl bg-white shadow-xl border border-gray-200 px-10 py-8">
    <div className="grid grid-cols-4 gap-10">

      {/* ALL INTEGRATIONS */}
      <div className="border-r border-gray-200 pr-10">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
          All Integrations
        </p>

        <h3 className="text-[18px] font-semibold text-gray-900">
          Integration catalog
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
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
          Popular Sources
        </p>

        <div className="space-y-8 text-[18px]">
          <div className="flex items-center gap-4">
            <img src="/icons/snowflake.svg" className="w-7 h-7" />
            <span>Snowflake</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/databricks.svg" className="w-7 h-7" />
            <span>Databricks</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/bigquery.svg" className="w-7 h-7" />
            <span>Google BigQuery</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/redshift.svg" className="w-7 h-7" />
            <span>AWS Redshift</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/azure.svg" className="w-7 h-7" />
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
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
          Popular Destinations
        </p>

        <div className="space-y-8 text-[18px]">
          <div className="flex items-center gap-4">
            <img src="/icons/salesforce.svg" className="w-7 h-7" />
            <span>Salesforce</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/hubspot.svg" className="w-7 h-7" />
            <span>HubSpot</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/googleads.svg" className="w-7 h-7" />
            <span>Google Ads</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/facebook.svg" className="w-7 h-7" />
            <span>Facebook Ads</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/tradedesk.svg" className="w-7 h-7" />
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
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
          Popular Extensions
        </p>

        <div className="space-y-8 text-[18px]">
          <div className="flex items-center gap-4">
            <img src="/icons/dbt.svg" className="w-7 h-7" />
            <span>dbt</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/sigma.svg" className="w-7 h-7" />
            <span>Sigma</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/looker.svg" className="w-7 h-7" />
            <span>Looker</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/icons/fivetran.svg" className="w-7 h-7" />
            <span>Fivetran</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default IntegrationsMenu
