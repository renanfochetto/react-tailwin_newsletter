import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";


const ToggleTheme = () => {
    const toggle = () => {
        document.documentElement.classList.toggle("dark");
    }

    return <div>
        <MoonIcon className="h-8 text-gray-100 block cursor-pointer dark:hidden" onClick={toggle} />
        <SunIcon className="h-8 text-gray-100 hidden cursor-pointer dark:block" onClick={toggle} />
    </div>
}

export default ToggleTheme;
