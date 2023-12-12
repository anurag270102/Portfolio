const Experience = (props) => {
    return ([
        <div key={1212}>
            <div className="  flex flex-row px-11 lg:px-30   py-10">
                <div>
                    <h2 className="font-semibold  font-sen">
                        {props.title}
                    </h2>
                    <h2 className="font-semibold mt-2 lg:mt-0 font-sen ">{props.name1}</h2>
                    <span className="italic" >{props.city}</span>
                    <div className="mt-2 font-sen">
                        <p className="text-gray-600">{props.tech}</p>
                        <p>
                            {props.time}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    ]);
}
export default Experience;