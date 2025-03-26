import Card from 'antd/es/card/Card'
import { Book } from '../models/Book'
import { CardTitle } from './CardTitle'
import Button from 'antd/es/button/button'

interface Props {
	books: Book[]
	handleDelete: (id: string) => void
	handleOpen: (book: Book) => void
}

export const Books = ({ books, handleDelete, handleOpen }: Props) => {
	return (
		<div className='cards'>
			{books.map((book: Book) => (
				<Card key={book.id} title={<CardTitle price={book.price} title={book.title} />}>
					<p>{book.description}</p>
					<div className='card__buttons'>
						<Button
							onClick={() => {
								handleOpen(book)
							}}
							style={{ flex: 1 }}
						>
							Edit
						</Button>
						<Button
							danger
							onClick={() => {
								handleDelete(book.id)
							}}
							style={{ flex: 1 }}
						>
							Delete
						</Button>
					</div>
				</Card>
			))}
		</div>
	)
}
