import CollectionItem from "../collection_item/collection_item.component";
export const deduceCollectionFromProps = (collection,index) => {

	const { title, items } = collection[index];
	return (
						<div className="collection-body">
							<div className="collection-title-div">
								<p className="collection-title">
									{title.toUpperCase()}
								</p>
							</div>
							{items.map(({ id, ...otherProps }) => (
								<CollectionItem key={id} {...otherProps}/>
							))}
						</div>
					);
}