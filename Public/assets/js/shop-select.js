function getShops(){
	$('div').empty();

	$.ajax({
		url: '/shops.json',
		method: 'GET'
	}).then(function(shops){
		for (var shopIndex in shops){
			// console.log(shopIndex);
			// console.log(shops[shopIndex]);
			// console.log(shops);

			var p = $('<p>'); // <p></p>

			//one way
				// p.text(JSON.stringify(shops[shopIndex]))

			//another way
				// p.text("id: " + shops[shopIndex].id + ", actor name: " + shops[shopIndex].actor_name)

			//another way
				p.text(`id: ${shops[shopIndex].id}, actor name: ${shops[shopIndex].actor_name}`)

				var bt = $('<button>'); //<button></button>
				bt.attr('class', 'delete');
				
				bt.text('delete'); //<button>delete</button>
				bt.attr('data-id', shops[shopIndex].id)
				//<button data-id="4">delete</button>

				p.append(bt);




			$('div').prepend(p);
		}
	})
}
