
const FeedBack = ({ handleFeedback }) => {
    // console.log(handleFeedback);
    return (
        <div>
            <h3 className="text-3xl font-bold">Send Feedback</h3>

            <div className="my-12">
                <form onSubmit={handleFeedback} className="flex flex-col gap-4">
                    <textarea name="feedback" className="textarea textarea-bordered w-full" placeholder="Feedback"></textarea>
                    <button onClick={handleFeedback} className="btn btn-neutral w-full">Submit</button>
                </form>
            </div>


        </div>
    );
};

export default FeedBack;