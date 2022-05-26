import React from 'react';
import { Fragment } from 'react';
import { Link } from 'gatsby';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { navigation } from '../data/navbar-data';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-secondary">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 pb-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-evenly">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-orange-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>

							<div className="flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map(item => (
											<Link
												key={item.name}
												to={`${item.pageLink}`}
												activeStyle={{ color: '#fed7aa', backgroundColor: '#374151' }}
												className={classNames(
													'rounded-md px-10  py-5 text-center text-sm font-medium text-gray-300 hover:text-gray-100',
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												<h2>{item.name}</h2>
												{item.icon}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map(item => (
								<Link
									key={item.name}
									to={`${item.pageLink}`}
									activeStyle={{ color: '#fed7aa', backgroundColor: '#374151' }}
									className={classNames(
										' flex flex-row items-center justify-between rounded-md px-3 py-2 font-roman text-base font-bold tracking-widest text-gray-300',
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.icon} {item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
