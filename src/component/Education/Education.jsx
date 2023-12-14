const Education = (props) => {
    return ([
        <div key={1212}>
            <div className=" px-5 lg:px-30 flex flex-row justify-evenly  py-10">
                <div className=" ">
                    <h2 className="font-semibold text-2xl font-sen">
                        {props.title}
                    </h2>
                    <h2 className="font-semibold mt-2 text-[15px] lg:text-xl lg:mt-0 font-sen ">{props.name1}</h2>
                    <span className="italic text-[15px] lg:text-[16px]" >{props.city}</span>
                    <div className="mt-2 font-sen text-[18px] ">
                        <p>{props.per}</p>
                        <p>
                            {props.time}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    ])
}
export default Education;