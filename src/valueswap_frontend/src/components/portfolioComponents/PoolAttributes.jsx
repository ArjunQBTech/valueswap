

const Attributes=({id,swap_fees})=>{

const DATA = {
    name : id,
    symbol : "RDNT_WETH",
    type : "Weighted",
    swap_fees : `${parseFloat(parseInt(swap_fees) * 0.1).toFixed(1)}% (editable by pool owner)`
}
    console.log("SWAP : ", swap_fees)
    return(
        <>
            {
                Object.keys(DATA).map((key, index)=>(
                    <div key={index} className="w-full flex justify-between items-center">
                        <p className="text-lg text-[#CCC]">{key.charAt(0).toLocaleUpperCase() + key.slice(1)} :</p>
                        <p className="font-semibold text-lg">{DATA[key]}</p>
                    </div>
                ))
            }
        </>
    )
}

const PoolAttributes = ({pool, id, poolInfo})=>{
    console.log(pool,poolInfo)
    return(
        <div className='min-w-[200px] font-gilroy min-h-[280px] bg-transparent backdrop-blur-[32px] rounded-lg p-4 border border-white
        flex flex-col justify-around gap-4
        '>
            <h4 className="text-2xl">Pool Attributes</h4>
            <div className="flex flex-col justify-between gap-4 mt-4">
                <Attributes id={id} swap_fees={poolInfo?.swap_fee}/>
            </div>
        </div>
    )
}
export default PoolAttributes;