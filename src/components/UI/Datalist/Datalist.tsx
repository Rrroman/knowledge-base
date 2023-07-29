function Datalist() {
	return (
		<fieldset>
			<legend className='mb-4 text-center'>Fruits Datalist</legend>

			<div className='mb-4'>
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label className='mr-4' htmlFor='datalist-input'>
					Fruit name
				</label>
				<input
					className='pl-2 text-slate-900 placeholder:text-slate-900'
					type='text'
					id='datalist-input'
					list='datalist-options'
					placeholder='Choose your fruit'
				/>
				<datalist
					className='mb-10 bg-orange-500 text-purple-500'
					id='datalist-options'
				>
					<option value='Apple'>Apple</option>
					<option value='Banana'>Banana</option>
					<option value='Cherry'>Cherry</option>
				</datalist>
			</div>

			<p className='text-red-400'>
				Conclusion: isn't good to use native datalist due to uncontrolled styles
				of options
			</p>
		</fieldset>
	);
}

export { Datalist };

// https://youtu.be/iX_QyjdctsQ
