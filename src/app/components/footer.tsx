import { Facebook, Instagram, Linkedin  } from 'lucide-react';

export default function Footer(){
    return(
        <div className='pt-7'>
            <div className='w-52 m-auto space-y-4'>
                <div className='flex justify-center gap-4'>
                    <Facebook size={30} />
                    <Instagram size={30} />
                    <Linkedin size={30} />
                </div>
                <div className='text-center text-base'>
                    Copyright Reserved-2024
                </div>
            </div>
        </div>
    )
}