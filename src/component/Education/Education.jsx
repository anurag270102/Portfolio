const Education = (props) => {
    return ([
        <div key={1212}>
            <div className=" px-5 lg:px-30 flex flex-row justify-evenly  py-10">
                <div className=" ">

                    <h2 className="font-semibold  font-sen">
                        {props.title}
                    </h2>
                <h2 className="font-semibold mt-2 lg:mt-0 font-sen ">{props.name1}</h2>   
                <span className="italic" >{props.city}</span>
                    <div className="mt-2 font-sen">
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