var data = {
  labels: [],
  datasets: [
    {
      label: 'Kittehz!!',
      fillColor: "rgba(151, 187, 205, 0.5)",
      strokeColor: "rgba(151, 187, 205, 0.8)",
      highlightFill: "rgba(151, 187, 205,0 .75)",
      highlightStroke: "rgba(151, 187, 20 5,1)",
      data: []
    }
  ]
}

var images = [];
var files = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

function Photo(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 1;
  data.labels.push(name);
  data.datasets[0].data.push(0);
  images.push(this);
}

function buildPhoto() {
  for (var i = 0; i < files.length; i++) {
    var filePath = 'images/' + files[i] + '.jpg';
    new Photo(files[i], filePath);
  }
} buildPhoto();


var tracker = {
  left: '',
  right: '',
  leftImgEl: document.getElementById('leftPhoto'),
  rightImgEl: document.getElementById('rightPhoto'),
  leftCaption: document.getElementById('capLeft'),
  rightCaption: document.getElementById('capRight'),

  getRandomNum: function() {
    return Math.floor(Math.random() * images.length);
  },

  getRandomImg: function() {
    this.left = images[tracker.getRandomNum()];
    this.right = images[tracker.getRandomNum()];
    
    while(this.left === this.right) {
      this.right = images[tracker.getRandomNum()];
    }
    this.leftImgEl.src = this.left.path;
    this.leftImgEl.id = this.left.name;
    this.leftCaption.textContent = this.left.name;

    this.rightImgEl.src = this.right.path;
    this.rightImgEl.id = this.right.name;
    this.rightCaption.textContent = this.right.name;
  },

  vote: function(id) {
    for (var i in images) {
      if (images[i].name === id) {
        images[i].votes += 1;
        //This may be necessary for Local Storage?
        // data.datasets[0].data[i] = images[i].votes;
        chart.datasets[0].bars[i].value = images[i].votes;
      }
    }
  }
}

var ctx = document.getElementById('catChart').getContext('2d');
var chart = new Chart(ctx).Bar(data, {
  scaleShowVerticalLines: false,
  scaleShowHorizontalLines: true,
  barStrokeWidth: 1
});

var mainContent = document.getElementById('main_content');
mainContent.addEventListener('click', function(event) {
  if (event.target.id === tracker.left.name || event.target.id === tracker.right.name) {
    tracker.vote(event.target.id);
    tracker.getRandomImg();
    chart.update();
  } else {
    console.log('Click the image, Idiot!');
  }
})

tracker.getRandomImg();
