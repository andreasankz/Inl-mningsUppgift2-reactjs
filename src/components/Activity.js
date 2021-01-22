import React from 'react'

const Activity = ({ activity, activitys, setActivitys }) => {

    const completionHandler = () => {
        setActivitys(activitys.map(item => {
            if(item.id === activity.id) {
                return {
                    ...item, task: !item.task
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setActivitys(activitys.filter(item => item.id !== activity.id))
    }

    return (
        <div className={ `border mb-2 p-3 ${ activity.task ? 'complete' : 'ongoing' }` }>
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${ activity.task ? 'complete' : 'ongoing' }`}>
                    <div className="name">{activity.name}</div>
                    <div className="description">{activity.description}</div>
                </div>
                <div>
                    <i onClick={completionHandler} className={ `far fa-check-square cursor-point ${ activity.task ? 'complete' : 'ongoing' }` }></i>
                    <i onClick={deleteHandler} className="fas fa-trash cursor-point"></i>
                </div>
            </div>
        </div>
    )
}


export default Activity
