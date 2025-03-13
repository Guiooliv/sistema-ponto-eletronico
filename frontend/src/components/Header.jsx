import 'bootstrap-icons/font/bootstrap-icons.css';
//#021B33 #12577b #f7f7f7 #a9cfe5 bg-gradient-to-l from-[#12577b] to-[#021B33]

function Header() {
  return (
    <header className="w-screen h-[90px] px-5 flex items-center justify-between  font-mono text-3xl text-white bg-gradient-to-r from-[#021B33] to-[#12577b]">
      <div className='flex items-center'> 
        <i className="bi bi-hourglass-split text-[40px] hover:text-[#a9cfe5] transition-colors"></i>
        <h1 className="items-start text-[#f7f7f7] px-5 transition-colors hover:text-[#a9cfe5]">Gestão de Ponto Eletrônico</h1>
      </div>


      <i className="bi bi-person-circle text-[40px] hover:text-[#a9cfe5] transition-colors cursor-pointer"></i>
    </header>
  );
}
export default Header;
