import React, {useEffect, useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { getMailConfirmation } from '../../redux/actions';
import dingbellLogo from "../../img/dingbell_white.png";
import { PulseLoader } from "react-spinners";

const UserConfirm = () => {
		const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";
		const dispatch = useDispatch();

		const message = useSelector((state) => state.mailConfirmation.msg);
		const {token} = useParams();
		const [loading, setLoading] = useState(false);
		const override = `
					display: flex;
					align-items: center;
					justify-content: center;		
		`;
		
		useEffect(() => {
			async function fetchData() {
				setLoading(true);
				await dispatch(getMailConfirmation(token));
				setLoading(false);
			}
			fetchData(); 
		}, [dispatch, token]);

		return (
				<div className='h-screen flex bg-gray-bg1' style={{ 
						backgroundImage: `url(${bgimg})`,
						backgroundSize: "cover", 
					}} >
						<Link to="/">
					<div className="absolute flex text-sm text-white mb-1 mt-1">
					 <img className="mx-auto"  src={dingbellLogo} width="40" alt="" />
						<h1 className="my-auto text-lg font-roboto font-semibold">DingBell</h1>
						</div>
					 </Link>
						<div className='inline-block mx-auto my-auto justify-items-center '>
							<div className=' mx-2 bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
								{loading 
									? (<PulseLoader
										css={override}
										margin={10}
										size={30}
										color={"#D0024A"}
										loading={loading}
									/>)
									:(
										<div>
											<h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
												{ message
													?`${message}✅`
													:`There was an error while trying to confirm the account ❌`
												} 
											</h1>
												{ message
													? (<NavLink to='/resto/login'>
															<button
																className="mt-4 mb-4 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out "
															>
															 Sign In
															</button>
														</NavLink>
														) 
													:<br></br>
												}
										</div>
										)
									}
								</div>
						</div>
				</div>
		)
}

export default UserConfirm
