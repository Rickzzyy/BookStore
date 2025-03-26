import Card from 'antd/es/card/Card'
import { Book } from '../Models/Book'
import { CardTitle } from './CardTitle'
import Button from 'antd/es/button/button'

interface Props {
	books: Book[]
}

export const Books = ({ books }: Props) => {
	return (
		<div className='cards'>
			{books.map((book: Book) => (
				<Card key={book.id} title={<CardTitle price={book.price} title={book.title} />} bordered={false}>
					<p>{book.description}</p>
					<div className='card__buttons'>
						<Button>Edit</Button>
						<Button>Delete</Button>
					</div>
				</Card>
			))}
		</div>
	)
}
