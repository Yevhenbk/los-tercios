import * as React from 'react'
import getState from './flux'

export const Context = React.createContext<any>(null)

const injectContext = (PassedComponent: any) => {
	const StoreWrapper = (props: any) => {

		const [state, setState] = React.useState<any>(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore: any) =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		)

		React.useEffect(() => {
			const controller = new AbortController()
			// const signal = controller.signal

			state.actions.getCompetitors()
			state.actions.getProducts()
			state.actions.getClasses()

			return () => {
				console.log('cancelled')
				controller.abort()
			}
		}, [])

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		)
	}
	return StoreWrapper
}

export default injectContext