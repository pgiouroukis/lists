import {useState, useEffect} from "react"
import Navbar from '../components/IndexNavbar'
import Button from '../components/usual/Button'
import InfoSection from "../components/IndexPage/InfoSection"
import Input from "../components/IndexPage/Input"
import { bounceInRight, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { useRouter } from 'next/router'

export default function IndexPage() {

    const router = useRouter()
    
    var [input, setInput] = useState(false)
    var [fadeout, setFadeout] = useState(false)
    var [showIndexPage, setShowIndexPage] = useState(true)


    const styles = {
        bounceInRight: {
          animation: 'x 1s',
          animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
        },
        fadeOut: {
            animation: 'x 500ms',
            animationName: Radium.keyframes(fadeOut, 'fadeOut')
        }  
    }
    
    const handlePageExit = () => {
        setFadeout(true)
        setTimeout(()=>{       
            setFadeout(false)
            setShowIndexPage(false)
            setInput(true)
        }, 500)
    }

    return (<StyleRoot>
			<div className="min-h-screen overflow-x-hidden bg-gradient-to-tr from-purple-50 via-blue-100 to-blue-50" style={{backgroundColor:"#E8F5FE"}} >
				<Navbar />
                {showIndexPage &&
				<div style={ (fadeout?styles.fadeOut:{}) } >
					<div className="mx-auto px-4 pt-3 md:pt-10 max-w-7xl">
						<header className="max-w-6xl mx-auto mb-12 md:mb-0">
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-800 font-semibold leading-tight z-40">
								Δημιουργία lead για την επιχείριση σου, εύκολα και γρήγορα
							</h1>
						</header>
					</div>
					<div className="mt-8 flex lg:flex-shrink-0 justify-center">
						<div className="inline-flex rounded-md shadow">
                            <Button onClick={ handlePageExit } size="lg" thin font="lg" >
                                Ξεκίνα Δωρεάν
                            </Button>
						</div>
						<div className="ml-3 inline-flex rounded-md shadow">
							<Button onClick={ handlePageExit } size="lg" thin theme="secondary">
                                Μάθε πως λειτουργεί
                            </Button>
						</div>
					</div>
                    {!input &&
                    <div className="pt-10" >
                        <InfoSection/>
                    </div>
                    }
				</div>
                }
                {input && 
                    <div className="pt-10 flex justify-center" style={styles.bounceInRight} >
                        <Input/>
                    </div>
                }

			</div>
            </StyleRoot>
		);
}
