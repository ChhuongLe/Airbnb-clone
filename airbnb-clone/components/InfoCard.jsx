export default function InfoCard({ image, location, title, description, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w=40">
        <Image src={img} alt="" layout="fill" object="cover" />
      </div>
    </div>
  )
}