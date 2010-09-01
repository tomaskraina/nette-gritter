<?php

/**
 * My Application
 *
 * @copyright  Copyright (c) 2010 John Doe
 * @package    MyApplication
 */

use Nette\Application\Presenter;


/**
 * Base class for all application presenters.
 *
 * @author     John Doe
 * @package    MyApplication
 */
abstract class BasePresenter extends Presenter
{

	public function  flashMessage($message, $type = 'info', $title = '')
	{
		$flash = parent::flashMessage($message, $type);
		$flash->title = $title;
		return $flash;
	}



	protected function  beforeRender()
	{
		parent::beforeRender();

		$data = array();
		foreach ($this->getTemplate()->flashes as $flash) {

			$data[] = array(
				'title' => $flash->title,
				'text' => $flash->message,
				'type' => $flash->type
			);
		}

		$this->payload->gritter = $data;
	}
}
