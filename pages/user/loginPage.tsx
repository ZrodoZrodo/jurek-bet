import 'tailwindcss/tailwind.css'
import {useState} from "react";

const loginPage=()=>{


    const [login,setLogin]=useState({nick:"",password:""})

    const handleLogin=()=>{
        console.log(login)

    }


    return<>

        <section className="gradient-form h-full w-screen place-items-center flex justify-center bg-neutral-700">
            <div className="container h-full p-10">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center bg-neutral- text-neutral-200">
                    <div className="w-full">
                        <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">

                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">

                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo"/>
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Grzybne typy
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">Please login to your account</p>

                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <label
                                                    htmlFor="exampleFormControlInput11"
                                                    className="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500"
                                                >Nick
                                                </label>
                                                <input
                                                    type="text"
                                                    className="peer border-2 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                    onChange={(e)=>setLogin( {...login,nick:e.target.value})}
                                                    value={login.nick}
                                                />
                                            </div>


                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <label
                                                    htmlFor="exampleFormControlInput11"
                                                    className="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500"
                                                >Hasło
                                                </label>
                                                <input
                                                    type="password"
                                                    className="peer border-2 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                    onChange={(e)=>setLogin( {...login,password:e.target.value})}
                                                value={login.password}
                                                />

                                            </div>


                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    type="button"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}
                                                onClick={handleLogin}>
                                                    Log in
                                                </button>

                                            </div>

                                        </form>
                                    </div>
                                </div>


                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            Szczęściarz
                                        </h4>
                                        <p className="text-m">
                                            Do dziś Ci Dziękuje Boże, że śpię w łóżku ,a nie w norze, że poznałem miłość życia, że ją kocham nie z ukrycia<br/>
                                            Ewa to ten cud nad cuda, cudne piersi, cudne uda<br/>
                                            Usta jej poezja smaku, dziś nie czuje już ich braku<br/>
                                            Jest królową mego życia i nie ma nic do ukrycia<br/>
                                            Pierze, sprząta i gotuje, nic mi przy niej nie brakuje<br/>
                                            Nie zamienił bym Ewuni, najlepiej się czuje u ni!<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
}

export default loginPage