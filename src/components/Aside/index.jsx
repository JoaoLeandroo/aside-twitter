import { FaTwitter } from 'react-icons/fa';
import { BiHomeCircle, BiSearch, BiSave, BiUser } from 'react-icons/bi'
import { RiNotification3Line } from 'react-icons/ri'
import { HiOutlineMail, HiOutlineClipboardList } from 'react-icons/hi'
import { MdOutlineVerified } from 'react-icons/md'
import { CgMoreO } from 'react-icons/cg'
import '../Aside/aside.css'

export default function Aside() {
    return(
        <aside>
            <h1>
                <a href="#" className='logo'>{<FaTwitter size={30}/>}</a>
            </h1>
            <nav>
                <a href="#">
                    <div>
                        <BiHomeCircle size={30}/>
                        <span>Página inicial</span>
                    </div>
                </a>

                <a href="#">
                    <div>
                        <BiSearch size={30}/>
                        <span>Explorar</span>
                    </div>
                </a>

                <a href="#">
                    <div>
                        <RiNotification3Line size={30}/> 
                        <span>Notificações</span>
                    </div>
                </a>

                <a href="#">
                    <div>
                        <HiOutlineMail size={30}/>
                        <span>Mensagens</span>    
                    </div>
                </a>

                <a href="#">
                    <div>
                        <HiOutlineClipboardList size={30}/> 
                        <span>Listas</span>          
                    </div>
                </a>

                <a href="#">
                    <div>
                        <BiSave size={30}/>
                        <span>Itens Salvos</span>
                    </div>
                </a>

                <a href="#">
                    <div>
                        <MdOutlineVerified size={30}/> 
                        <span>Verificados</span>    
                    </div>
                    </a>

                <a href="#">
                    <div>
                        <BiUser size={30}/>
                        <span>Perfil</span>          
                    </div>
                </a>

                <a href="#">
                    <div>
                        <CgMoreO size={30}/>
                        <span>Mais</span>    
                    </div>
                </a>
            </nav>
            <button><span>Tweetar</span></button>
        </aside>
    )
}