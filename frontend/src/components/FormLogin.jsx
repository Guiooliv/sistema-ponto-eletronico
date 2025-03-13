function FormLogin() {
    return (
        <main className="h-screen flex items-center justify-center">
            <form action="" className="bg-white flex h-[500px] w-[800px] items-center rounded-md">
                <div className="flex flex-col items-center justify-center w-[400px] h-[300px] gap-[10px] ">
                    <h2 className="font-bold text-[24px]">Login</h2>
                    <input type="text" name="fakeuser" autocomplete="off" placeholder="Enter Username" className="p-[6px] w-[90%] h-[30px] bg-[#EFEFEF] rounded-sm focus:border border-solid transition-colors duration-200 border-[#a9cfe5] outline-none"/>
                    <input type="password"  autoComplete="new-password" placeholder="Enter Password" className=" p-[6px]  w-[90%] h-[30px] bg-[#EFEFEF] rounded-sm focus:border border-solid transition-colors duration-200 border-[#a9cfe5] outline-none"/>
                    <button type="button" className="text-white text-[18px] bg-[#021B33] w-[90%] h-[50px] cursor-pointer hover:bg-[#12577b] rounded-sm">Login</button>
                </div>
                <div className="flex flex-col justify-center bg-gradient-to-l from-[#12577b] to-[#021B33] h-[500px] w-[400px] rounded-md">
                    <h2 className="flex text-[24px] h-[180px] text-center font-bold justify-center items-end text-[#f7f7f7]" >Seja bem vindo!</h2>
                    <div className=" text-center h-[320px] p-7">
                        <p className="text-[#FFFFFF]">Seja bem vindo! Por favor solicite que o administrador faça seu cadatro para que possa utilizar nossa ferramenta</p>
                    </div>
                </div>
            </form>
        </main>
    );
}
export default FormLogin;