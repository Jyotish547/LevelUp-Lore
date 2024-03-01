import '../globals.css';

interface BorderButtonProps {
    label: string;
  }

function BorderButton({ label }: BorderButtonProps) {
    return(
        <button className='py-2 px-4 bg-black border-2 border-eafc rounded-md'>
            {label}
        </button>
    )
}

export default BorderButton;