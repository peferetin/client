import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import SignInModal from '../Auth/SignInModal'
import RegisterModal from '../Auth/RegisterModal'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProfileMenu = () => {

    const { userData, logout } = useAuth()
    const [open, setOpen] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)



    // BASED ON THE USERDATA DISPLAY SIGN IN / REGISTER IF USERDATA is NULL ELSE : DISPLAY PROFILE AND LOGOUT

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2255c72008299cf296015869a862dbb63c5651eed54cfa0f7b173901d3587684?apiKey=cb130a580d494b2d8274b3edb32534b2&"
                            className="w-5 aspect-square"
                        />

                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </MenuButton>
                </div>

                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {userData ? (
                                <>
                                    <MenuItem>
                                        {({ focus }) => (
                                            <a
                                                href='/profile'
                                                className={classNames(
                                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Profile
                                            </a>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ focus }) => (
                                            <a
                                                href='/orders'
                                                className={classNames(
                                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Orders
                                            </a>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ focus }) => (
                                            <a
                                                onClick={logout}
                                                className={classNames(
                                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Logout
                                            </a>
                                        )}
                                    </MenuItem>
                                </>

                            )

                                : (
                                    <>
                                        <MenuItem>
                                            {({ focus }) => (
                                                <a
                                                    onClick={() => setOpen(true)}
                                                    className={classNames(
                                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Sign In
                                                </a>
                                            )}
                                        </MenuItem>
                                        <MenuItem>
                                            {({ focus }) => (
                                                <a
                                                    onClick={() => setOpenRegister(true)}
                                                    className={classNames(
                                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Register
                                                </a>
                                            )}
                                        </MenuItem>
                                    </>
                                )
                            }



                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
            <SignInModal open={open} setOpen={setOpen} />
            <RegisterModal open={openRegister} setOpen={setOpenRegister} />
        </>
    )
}

export default ProfileMenu