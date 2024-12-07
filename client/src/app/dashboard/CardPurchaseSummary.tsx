import { useGetDashboardMetricsQuery } from '@/state/api';
import numeral from 'numeral';
import React from 'react'

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  return (
    <div className='flex bg-white justify-between flex-col row-span-2 xl:row-span-3 col-span-2 xl:col-span-1 shadow-md rounded-xl'>
      {isLoading ? (
        <div >Loading...</div>
      ):(<>
      {/* Header */}
      <div>
        <h2 className='text-lg font-semibold mb-2 px-7 pt-5'>
          Purchase Summary
        </h2>
      </div>

      {/* Body */}
      <div>
        <div className='mb-4 mt-7 px-7'>
          <p className='text-xs text-gray-400'>Purchased</p>
          <div className='flex items-center'>
            <p className='text-2xl font-bold'>
              {lastDataPoint 
              ? numeral(lastDataPoint.totalPurchased).format('0.0a')
              : "0"}
            </p>
          </div>
          {lastDataPoint && (
            <p ></p>
          )}
        </div>
      </div>
      </>)}
    </div>
  )
}

export default CardPurchaseSummary