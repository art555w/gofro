export function createSize(sizes) {

	// const list = [
	// 	['first_height', 'first_lenght', 'first_width'],
	// 	['second_height', 'second_width', 'second_lenght'],
	// 	['thrid_height', 'thrid_lenght', 'thrid_width'],
	// 	['forth_height', 'forth_lenght', 'forth_width']
	// ]

	const first_height = +sizes.first_height
	const first_lenght = +sizes.first_lenght
	const first_width = +sizes.first_width
	const second_height = +sizes.second_height
	const second_width = +sizes.second_width
	const second_lenght = +sizes.second_lenght
	const thrid_height = +sizes.thrid_height
	const thrid_lenght = +sizes.thrid_lenght
	const thrid_width = +sizes.thrid_width
	const forth_height = +sizes.forth_height
	const forth_lenght = +sizes.forth_lenght
	const forth_width = +sizes.forth_width

	console.log(thrid_height)

	const blank_lenght = (first_lenght + first_width) * 2 + 67
	let blanks_width
	if (thrid_height === 0 || thrid_width === 0) {
		blanks_width = (first_height + first_width + 8) + (second_height + second_width + 8)
	} else if (forth_height === 0 || thrid_width === 0) {
		blanks_width = (first_height + first_width + 8) + (second_height + second_width + 8) + (thrid_height + thrid_width + 8)
	} else {
		blanks_width = (first_height + first_width + 8) + (second_height + second_width + 8) + (thrid_height + thrid_width + 8) + (forth_height + forth_width + 8)
	}


	const blank_width = first_height + first_width + 8
	const box_lenght_one = first_lenght + 2
	const box_width_two = first_width + 4
	const box_lenght_three = first_lenght + 4
	const box_width_for = first_width + 2
	const first_run_left = first_width / 2 + 2
	const first_run_right = second_width === 0 ? first_run_left : (second_width / 2 + 2) + first_run_left
	const first_run_center = first_height + 4
	// const second_run_left = second_width / 2 + 2
	const second_run_right = thrid_width === 0 ? second_width / 2 + 2 : (thrid_width / 2 + 2) + (second_width / 2 + 2)
	const second_run_center = second_height + 4
	// const thrid_run_left = width / 2 + 2
	const thrid_run_right = forth_width === 0 ? thrid_width / 2 + 2 : (forth_width / 2 + 2) + (thrid_width / 2 + 2)
	const thrid_run_center = thrid_height + 4
	// const forth_run_left = width / 2 + 2
	const forth_run_right = forth_width / 2 + 2
	const forth_run_center = forth_height + 4
	const first_blank_width = first_height + first_width + 8
	const second_blank_width = second_width + second_height + 8
	const thrid_blank_width = thrid_width + thrid_height + 8
	const forth_blank_width = forth_width + forth_height + 8


	return {
		'blank_lenght': blank_lenght,
		'blank_width': blank_width,
		'blanks_width': blanks_width,
		'box_lenght_one': box_lenght_one,
		'box_width_two': box_width_two,
		'box_lenght_three': box_lenght_three,
		'box_width_for': box_width_for,
		'first_run_left': first_run_left,
		'first_run_right': first_run_right,
		'first_run_center': first_run_center,
		'second_run_right': second_run_right,
		'second_run_center': second_run_center,
		'thrid_run_right': thrid_run_right,
		'thrid_run_center': thrid_run_center,
		'forth_run_right': forth_run_right,
		'forth_run_center': forth_run_center,
		'first_blank_width': first_blank_width,
		'second_blank_width': second_blank_width,
		'thrid_blank_width': thrid_blank_width,
		'forth_blank_width': forth_blank_width
	}

}


// blank_lenght: 740807
// blanks_width: "2503708888"
// box_lenght_one: "3702"
// box_lenght_three: "3704"
// box_width_for: "3702"
// box_width_two: "3704"
// first_blank_width: "2503708"
// first_run_center: "2504"
// first_run_left: 187
// first_run_right: 189
// forth_blank_width: "8"
// forth_run_center: "4"
// forth_run_right: 2
// second_blank_width: "8"
// second_run_center: "4"
// second_run_right: 4
// thrid_blank_width: "8"
// thrid_run_center: "4"
// thrid_run_right: 4


// const blank_lenght = (lenght + width) * 2 + 67
// const blanks_width = width + height + 8
// const box_lenght_one = lenght + 2
// const box_width_two = width + 4
// const box_lenght_three = width + 4
// const box_width_for = width + 2
// const first_run_left = width / 2 + 2
// const first_run_right = first_run_left
// const first_run_center = height + 4
// const second_run_left = width / 2 + 2
// const second_run_right = first_run_left
// const second_run_center = height + 4
// const thrid_run_left = width / 2 + 2
// const thrid_run_right = first_run_left
// const thrid_run_center = height + 4
// const forth_run_left = width / 2 + 2
// const forth_run_right = first_run_left
// const forth_run_center = height + 4
// const first_blank_width = width + height + 8
// const second_blank_width = width + height + 8
// const thrid_blank_width = width + height + 8
// const forth_blank_width = width + height + 8

// return {
// 	'blank_lenght': blank_lenght,
// 	'blanks_width': blanks_width,
// 	'box_lenght_one': box_lenght_one,
// 	'box_width_two': box_width_two,
// 	'box_lenght_three': box_lenght_three,
// 	'box_width_for': box_width_for,
// 	'first_run_left': first_run_left,
// 	'first_run_right': first_run_right,
// 	'first_run_center': first_run_center,
// 	'second_run_left': second_run_left,
// 	'second_run_right': second_run_right,
// 	'second_run_center': second_run_center,
// 	'thrid_run_left': thrid_run_left,
// 	'thrid_run_right': thrid_run_right,
// 	'thrid_run_center': thrid_run_center,
// 	'forth_run_left': forth_run_left,
// 	'forth_run_right': forth_run_right,
// 	'forth_run_center': forth_run_center,
// 	'first_blank_width': first_blank_width,
// 	'second_blank_width': second_blank_width,
// 	'thrid_blank_width': thrid_blank_width,
// 	'forth_blank_width': forth_blank_width
// }