		//===================================
		// Document Ready
		//===================================
		$(document).ready(function () {
			ScentMenu.init();
		}); // end document ready

		var ScentMenu = new function () {
			//~~~~~~~~~~~~~~~~~~~~~~
			// Declared variables
			//~~~~~~~~~~~~~~~~~~~~~~
			var xmlData = 'scents.xml';
			var catArray = new Array();
			var myCategory = '';

			this.init = function () {
				ScentMenu.CategoriesAll();			
			};

			this.CategoriesAll = function () {
				$.ajax({
					type: "GET",
					url: xmlData,
					dataType: "xml",
					success: function (xmlData) {

						$('#ScentList').empty();

						$(xmlData).find('scent').each(function () {
							var $_scent = $(this);
							var $_html = '';

							$_html += '<ul id="scents" class="list-inline3">';
							$_html += '<li class="scentname">' + $_scent.attr('scentname') + '</li>';
							$_html += '<li class="picture"><img src="' + $_scent.find('picture').text() + '" alt="LaBellaPink ' 
							+ $_scent.attr('scentname') + ' scent" title="LaBellaPink scent ' + $_scent.attr('scentname') 
							+ '"/></li><li class="description">' + $_scent.find('description').text() + '</li>';
							$_html += '</ul>'

							$('#ScentList').append($_html);

						}); // End data for each scent
					}, // end success
					error: function () {
						ScentMenu.ErrorMessage();
					} // end error
				}); // end ajax
			}; // End Categories Function

		};