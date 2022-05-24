import React, { Fragment, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const processArray = [
	{ id: 1, name: 'New Project' },
	{ id: 2, name: 'Hand Sketched Designs' },
	{ id: 3, name: 'Creating The Patterns' },
	{ id: 4, name: 'Selecting Fabrics And Thread' },
	{ id: 5, name: 'Cutting Out The Fabric Pieces' },
	{ id: 6, name: 'Sewing The Product Together - Part 1' },
	{ id: 7, name: 'Sewing The Product Together - Part 2' },
	{ id: 8, name: 'Finished Product' },
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

const ProcessNav = () => {
	const [selected, setSelected] = useState(processArray[0]);
	console.log(selected);

	return (
		<Listbox value={selected} onChange={setSelected}>
			{({ open }) => (
				<>
					<div className="relative mt-1">
						<Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm">
							<span className="block truncate">{selected.name}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<SelectorIcon className="h-5 w-5 text-secondary" aria-hidden="true" />
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-200 py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{processArray.map(process => (
									<Listbox.Option
										id={''}
										key={process.id}
										className={({ active }) =>
											classNames(
												active ? 'bg-primary text-secondary' : 'text-secondary',
												'relative cursor-default select-none py-2 pl-3 pr-9',
											)
										}
										value={process}
									>
										{({ selected, active }) => (
											<>
												<span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
													{process.name}
												</span>

												{selected ? (
													<span
														className={classNames(
															active ? 'text-secondary' : 'text-secondary',
															'absolute inset-y-0 right-0 flex items-center pr-4',
														)}
													>
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
};

export default ProcessNav;
