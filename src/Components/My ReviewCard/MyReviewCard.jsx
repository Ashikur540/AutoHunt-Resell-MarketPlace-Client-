import { FaFileSignature, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


export const MyReviewsCard = ({ reviews, handleDelete, handleEdit }) => {





    const { _id, reviewerName, reviewerPhoto, reviewText, rating } = reviews;
    return (

        <div className="p-8 bg-neutral shadow-md border border-gray-800 rounded text-white">

            <div className="flex items-center">
                <p aria-label="Author" title="Author" className="mr-3">
                    <img
                        src={reviewerPhoto}
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </p>
                <div>
                    <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        { }
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                        Reviwer
                    </p>
                </div>
            </div>
            <a
                href="/"
                aria-label="Article"
                title="Jingle Bells"
                className="inline-block mb-3 text-2xl mt-4  font-bold leading-5 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                {reviewerName}
            </a>
            <p className="mb-5 text-gray-50">
                {reviewText}
            </p>
            <p class="text-sm  uppercase tracking-widest text-slate-50 font-bold">
                💛{rating}
            </p>
            <div className="flex justify-end ">
                <button className="text-red-500 tex-xl" onClick={() => { handleDelete(_id) }}><FaTrash /></button>
                <Link to={`/reviews/${_id}/edit`}>
                    <button className="text-sky-700 tex-xl  ml-6" onClick={() => { handleEdit(_id, reviewText) }}
                    ><FaFileSignature /></button>
                </Link>
            </div>

        </div>


    );
};